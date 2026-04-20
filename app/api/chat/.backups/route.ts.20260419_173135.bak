import { anthropic } from '@ai-sdk/anthropic'
import { streamText } from 'ai'
import { SYSTEM_PROMPT } from '@/lib/system-prompt'

export const runtime = 'edge'
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: anthropic('claude-haiku-4-5-20251001'),
    system: SYSTEM_PROMPT,
    messages,
    temperature: 0.3,
  })

  return result.toDataStreamResponse()
}
