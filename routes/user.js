import express from "express"
import User from "../models/User.js"
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node"

const router = express.Router()

router.post("/sync", ClerkExpressRequireAuth(), async (req, res) => {
  const { userId } = req.auth
  const { fullName, emailAddresses, imageUrl } = req.body

  let user = await User.findOne({ clerkId: userId })

  if (!user) {
    user = await User.create({
      clerkId: userId,
      name: fullName,
      email: emailAddresses[0].emailAddress,
      image: imageUrl,
    })
  }

  res.json(user)
})

export default router
