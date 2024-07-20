import crypto from "crypto";

export async function POST(req) {
  const { customerId } = await req.json();
  const API_KEY = "test_4yhYBA2C5kTMLYLX2Hn4j64xSKIExR1k"; 
  const userHash = crypto
    .createHmac("sha256", API_KEY)
    .update(customerId)
    .digest("hex");

  return Response.json({ userHash });
}
