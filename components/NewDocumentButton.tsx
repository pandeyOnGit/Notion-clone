"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { useTransition } from "react"
import { createNewDocument } from "@/actions/actions"
import { redirect } from "next/navigation"

function NewDocumentButton() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const handleCreateNewDocument = () => {
    startTransition(async () => {
      const docId = await createNewDocument()
      try {
        redirect(`/doc/${docId}`)
      } catch (error) {
        console.error(error)
      }
    })
  }
  return (
    <div>
      <Button onClick={handleCreateNewDocument} disabled={isPending}>
        {isPending ? "Creating..." : "New Document"}
      </Button>
    </div>
  )
}

export default NewDocumentButton
