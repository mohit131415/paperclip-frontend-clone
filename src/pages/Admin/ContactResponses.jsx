"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export default function ContactResponses() {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("adminToken")
    if (!token) {
      navigate("/admin/login")
      return
    }
    fetchMessages()
  }, [navigate])

  const handleUnauthorized = () => {
    localStorage.removeItem("adminToken")
    navigate("/admin/login")
  }

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contact")

      if (!response.ok) {
        throw new Error("Failed to fetch messages")
      }

      const data = await response.json()
      setMessages(data.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const updateMessageStatus = async (messageId, newStatus) => {
    setIsUpdating(true)
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${messageId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Failed to update status")
      }

      // Update messages list
      setMessages(messages.map((msg) => (msg._id === messageId ? { ...msg, status: newStatus } : msg)))
    } catch (err) {
      setError(err.message)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "unread":
        return "bg-red-500"
      case "read":
        return "bg-yellow-500"
      case "replied":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-white" />
      </div>
    )
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">Contact Form Responses</h2>
      </div>

      <div className="border border-zinc-800 rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-zinc-800">
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Email</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-400 h-32">
                  No messages found
                </TableCell>
              </TableRow>
            ) : (
              messages.map((message) => (
                <TableRow key={message._id} className="border-zinc-800">
                  <TableCell className="text-white">{formatDate(message.createdAt)}</TableCell>
                  <TableCell className="text-white">{message.name}</TableCell>
                  <TableCell className="text-white">{message.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${getStatusColor(message.status)} text-white border-0`}>
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-zinc-800 text-white hover:bg-zinc-800"
                      onClick={() => setSelectedMessage(message)}
                    >
                      View Message
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selectedMessage} onOpenChange={() => setSelectedMessage(null)}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Contact Message</DialogTitle>
          </DialogHeader>
          {selectedMessage && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400">From</h4>
                <p>
                  {selectedMessage.name} ({selectedMessage.email})
                </p>
                <p className="text-sm text-gray-400 mt-1">Phone: {selectedMessage.phone}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Message</h4>
                <p className="text-gray-300 whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Date</h4>
                <p>{formatDate(selectedMessage.createdAt)}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Status</h4>
                <Select
                  value={selectedMessage.status}
                  onValueChange={(value) => updateMessageStatus(selectedMessage._id, value)}
                  disabled={isUpdating}
                >
                  <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    <SelectItem value="unread">Unread</SelectItem>
                    <SelectItem value="read">Read</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

