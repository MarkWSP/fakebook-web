import { LikeIcon, ThreeDotIcon } from "../icons";
import { Avatar } from "./Avatar";
import { CloseIcon } from "../icons";

function PostItem() {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Avatar className="w-11 rounded-full" />
            <div className="flex flex-col">
              <p> Someone CC20</p>
              <p className="text-xs opacity-70">1d ago</p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="dropdown">
              <div tabIndex={0} role="button">
                <div className="avatar items-center cursor-pointer">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                    <ThreeDotIcon className="w-5 opacity-70" />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1[ z00=-r2"
              >
                <li>
                  <a> Edit</a>
                </li>
                <li>
                  <a> Delete</a>
                </li>
              </ul>
            </div>
             <div className="avatar items-center cursor-pointer">
                  <div className="w-10 h-10 rounded-full !flex justify-center items-center hover:bg-gray-200">
                    <CloseIcon className="w-5 opacity-70" />
                  </div>
                </div>
          </div>
        </div>
        <p>I love coding</p>
        <img src='data:image/jpeg;base64,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'
        className="" />

        {/* LIKE COMMENT SHARE */}
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end gap-1 cursor-pointer">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-200">
              <LikeIcon className='w-5' />
            </div>
            <p>{parseInt(Math.random()*100)*parseInt((Math.random()*10))} </p>
          </div>
          <div className="flex">
            <p className="opacity-60">3 comments</p>
          </div>
        </div>
        <div className="divider h-0 my-0"></div>

        {/* BUTTON LIKE cm sh */}
        <div className="flex gap-3 justify-between">
          <div className={`flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300
          ${Math.random()>0.5 ? 'bg-blue-300' : ''}` }>
            Like
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            Comment
          </div>
          <div className="flex gap-3 justify-center items-center cursor-pointer rounded-lg py-2 flex-1 hover:bg-gray-300">
            Share
          </div>
        </div>
        <div className="divider h-0 my-0"></div>

        {/* comment container */}
      </div>
    </div>
  );
}
export default PostItem;
