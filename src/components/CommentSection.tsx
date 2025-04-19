
import { useState } from "react";
import { Comment as CommentType } from "@/data/blog-data";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type CommentSectionProps = {
  postId: string;
  comments: CommentType[];
};

export function CommentSection({ postId, comments }: CommentSectionProps) {
  const [commentText, setCommentText] = useState("");
  const [allComments, setAllComments] = useState<CommentType[]>(comments);
  const { toast } = useToast();

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!commentText.trim()) return;
    
    // Create a new comment
    const newComment: CommentType = {
      id: `temp-${Date.now()}`,
      postId,
      author: "You",
      authorImage: "https://randomuser.me/api/portraits/lego/1.jpg",
      content: commentText,
      date: new Date().toISOString(),
    };
    
    // Add to comments
    setAllComments([newComment, ...allComments]);
    setCommentText("");
    
    toast({
      title: "Comment Added",
      description: "Your comment has been published.",
    });
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 font-serif flex items-center">
        <MessageSquare className="mr-2 h-5 w-5" />
        Comments
        <span className="ml-2 text-sm font-normal bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
          {allComments.length}
        </span>
      </h3>
      
      <form onSubmit={handleSubmitComment} className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="min-h-24 mb-3"
        />
        <Button type="submit" disabled={!commentText.trim()}>
          Post Comment
        </Button>
      </form>
      
      <div className="space-y-6">
        {allComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function Comment({ comment }: { comment: CommentType }) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<CommentType[]>(comment.replies || []);
  const { toast } = useToast();

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyText.trim()) return;
    
    const newReply: CommentType = {
      id: `temp-reply-${Date.now()}`,
      postId: comment.postId,
      author: "You",
      authorImage: "https://randomuser.me/api/portraits/lego/1.jpg",
      content: replyText,
      date: new Date().toISOString(),
    };
    
    setReplies([...replies, newReply]);
    setReplyText("");
    setIsReplying(false);
    
    toast({
      title: "Reply Added",
      description: "Your reply has been published.",
    });
  };

  return (
    <div className="group">
      <div className="flex">
        <Avatar className="h-10 w-10 mr-4 flex-shrink-0">
          <AvatarImage src={comment.authorImage} alt={comment.author} />
          <AvatarFallback>{comment.author[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <h4 className="font-medium">{comment.author}</h4>
            <span className="mx-2 text-muted-foreground">•</span>
            <time className="text-sm text-muted-foreground">
              {new Date(comment.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          </div>
          <div className="text-foreground mb-2">{comment.content}</div>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setIsReplying(!isReplying)}
          >
            {isReplying ? "Cancel" : "Reply"}
          </Button>
          
          {isReplying && (
            <form onSubmit={handleReply} className="mt-4 mb-4">
              <Textarea
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-16 mb-2"
              />
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsReplying(false)}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={!replyText.trim()}>
                  Reply
                </Button>
              </div>
            </form>
          )}
          
          {replies.length > 0 && (
            <div className="mt-4 space-y-4 pl-6 border-l">
              {replies.map((reply) => (
                <div key={reply.id} className="flex">
                  <Avatar className="h-8 w-8 mr-3 flex-shrink-0">
                    <AvatarImage src={reply.authorImage} alt={reply.author} />
                    <AvatarFallback>{reply.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center mb-1">
                      <h5 className="font-medium text-sm">{reply.author}</h5>
                      <span className="mx-2 text-muted-foreground text-sm">•</span>
                      <time className="text-xs text-muted-foreground">
                        {new Date(reply.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="text-sm">{reply.content}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
