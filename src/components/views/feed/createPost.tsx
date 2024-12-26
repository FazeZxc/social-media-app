import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LuVideo } from "react-icons/lu";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineArticle,
  MdOutlineEmojiEmotions,
} from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
export const CreatePost = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row gap-2">
          <Avatar>
            <AvatarImage></AvatarImage>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-[17rem] hover:bg-zinc-100 border-2 rounded-2xl hover:text-zinc-900 dark:hover:bg-zinc-100">
                  Post something.
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <div className="flex flex-row gap-4 items-center">
                    <Avatar>
                      <AvatarImage></AvatarImage>
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="text-white">
                        What do you want to talk about?
                      </span>
                      <DialogDescription className="text-xs">
                        Posting to Public
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Textarea />
                  <MdOutlineEmojiEmotions className="text-white" />
                  <div className="flex gap-4">
                    <LuVideo className="text-white" />
                    <MdOutlineAddPhotoAlternate className="text-white" />
                    <MdOutlineArticle className="text-white" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Post</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div>
              <Button variant="post">
                <LuVideo />
                &nbsp;Video
              </Button>
              <Button variant="post">
                <MdOutlineAddPhotoAlternate />
                &nbsp;Photo
              </Button>
              <Button variant="post">
                <MdOutlineArticle />
                &nbsp;Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
