import { useEffect, useState } from "react"
import { FakebookLogo, FakebookTitle } from "../icons/index"
import Register from "./Register"
import { loginSchema } from "../utils/validator"
import { useForm } from "react-hook-form"
import {yupResolver} from '@hookform/resolvers/yup'
import useUserStore from "../stores/userStore.js"
import { toast } from "react-toastify"

function Login() {

  const [resetForm, setResetForm] = useState(false)
  const login = useUserStore((state)=> state.login)
  const user = useUserStore(state=>state.user)

  const hdlClose = () => {
    console.log('dialog close')
    setResetForm(prv=>!prv)
  }

   const { handleSubmit, register, formState, reset } = useForm({
      resolver: yupResolver(loginSchema)
    })

    const {isSubmitting, errors} = formState


  const hdlLogin = async data => {
    try {
         await new Promise(resolve => setTimeout(resolve, 1000))
    const res = await login(data)
    toast.success(res.data.message)
  
    } catch (err) {
      const errMsg = err.response?.data?.error || err.message
      toast(errMsg)
    }
 
  }

  return (
    <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
      <div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between max-md:flex-col">
        <div className="flex flex-col max-md:items-center max-md:text-center gap-4 mt-20 basis-3/5 ">
          <div className="text-4xl"><FakebookTitle />{user?.firstName}</div>
          <h2 className="text-[30px] max-md:text-[28px] leading-8 mt-3 w-[514px]">
            Fakebook helps you connect and share with people in our life</h2>
        </div>

        <div className="flex-1 flex bg-white mt-8">
          <div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
            <form onSubmit={handleSubmit(hdlLogin)}>
              <fieldset disabled={isSubmitting}>
               <div className="card-body">
                 <input type='text'
                 className="input w-full"
                 placeholder="Email or phone number"
                 {...register('identity')} />
                 {errors.identity?.message && <p className='text-sm text-error'>{errors.identity?.message}</p>}

                 <input type='password'
                 className="input w-full"
                 placeholder="password"
                 {...register('password')} />
                 {errors.password?.message && <p className='text-sm text-error'>{errors.password?.message}</p>}

                {!isSubmitting && <button className="btn btn-primary text-xl">Login</button>}
                {isSubmitting && <button className="btn btn-primary text-xl">Login
                  <span className="loading loading-spinner text-accent"></span>
                  </button>}
                 <p className="text-center cursor-pointer opacity-70">Forgot password</p>
                 <div className=" divider my-0"></div>
                 <button type="button" className="btn btn-secondary text-lg"
                 onClick={()=>document.getElementById('register-form').showModal()}>Create new account</button>
               </div>
               </fieldset>
            </form>
          </div>
        </div>
       
      </div>

      <dialog onClose={hdlClose} id="register-form" className="modal">
  <div className="modal-box">
    <Register resetForm={resetForm} />
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
  </div>
</dialog>

    </div>
  )
}
export default Login