import Certificate from "../models/Certificate.js"

export async function generateMemberId() {
  const last = await Certificate.findOne().sort({ createdAt: -1 })

  if (!last) return "CV-01"

  const lastNumber = Number(last.memberId.split("-")[1])
  return `CV-${String(lastNumber + 1).padStart(2, "0")}`
}
