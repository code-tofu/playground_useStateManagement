import type { IComment } from "../types";
import { Timeline, Avatar } from "@chakra-ui/react";
import {colours} from "../constants"


function CommentItem({comment, num} : {comment:IComment, num: number}) {
    return (
        <Timeline.Item>
            <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator>
                    <Avatar.Root size="xs" colorPalette={colours[num]}>
                        <Avatar.Fallback name={num.toString()} />
                    </Avatar.Root>
                </Timeline.Indicator>
            </Timeline.Connector>
            <Timeline.Content textStyle="sm">
                <Timeline.Title>{comment.name}</Timeline.Title>
                <Timeline.Description />
                {comment.body}
                <Timeline.Description />
            </Timeline.Content>
        </Timeline.Item>
    );
}

export default CommentItem;

// const comment:IComment = {
//     postId: 1,
//     id: 1,
//     name: "id labore ex et quam laborum",
//     email: "Eliseo@gardner.biz",
//     body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
// };