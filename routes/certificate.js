import express from "express"
import Certificate from "../models/Certificate.js"
import { generateMemberId } from "../utils/generateMemberId.js"

const router = express.Router()

// Create or get certificate
router.post("/certificate", async (req, res) => {
  try {
    const { userId, userName, email } = req.body

    // 🔒 Check if certificate already exists
    let cert = await Certificate.findOne({ userId })
    if (cert) {
      return res.json(cert)
    }

    // 🆕 Create new certificate
    const memberId = await generateMemberId()

    cert = await Certificate.create({
      userId,
      userName,
      email,
      memberId,
      certificateId: `CERT-${Date.now()}`,
    })

    res.json(cert)
  } catch (err) {
    res.status(500).json({ error: "Certificate creation failed" })
  }
})

export default router
