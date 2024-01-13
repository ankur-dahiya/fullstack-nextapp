import { createPost, deletePost } from "@/lib/actions";

export default function page() {
    //      Server action in component will also 
    //     const actionInComponent = async ()=>{
//         "use server";
//         console.log("it works!!");
//     }
  return (
    <div>
        <form action={createPost}>
            <input type="text" placeholder="title" name="title"></input>
            <input type="text" placeholder="desc" name="desc"></input>
            <input type="text" placeholder="slug" name="slug"></input>
            <input type="text" placeholder="userId" name="userId"></input>
            <button>CreatePost</button>
        </form>
        <form action={deletePost}>
            <input type="text" placeholder="enter post id" name="id"></input>
            <button>DeletePost</button>
        </form>
    </div>
  )
}
