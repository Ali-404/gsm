import { Button, Input } from '@mui/material'
import appLogo from '../../assets/gsm.png'
import image from '../../assets/img1.png'
import { useForm } from 'react-hook-form'


export default function Login() {

  const { register, handleSubmit,formState: {errors}} = useForm()


  const login = (data) =>{
    console.log(data)
  }


  return (
    <div className="h-screen flex flex-row bg-light-green">

      <div className="flex-[0.5] rounded-[25px] rounded-bl-none rounded-tl-none flex flex-col items-center py-5 gap-[110px] px-6 bg-normal-green">
          <img src={appLogo} alt="Logo" className='w-[100px] md:w-[110px] lg:w-[120px] xl:w-[130px] self-start' />
          <img src={image} alt="image" className='w-[500px]' />
          <h2 className='mb-7 text-center md:text-xl'>Connectez-vous a votre <br /> compte</h2>
      </div>

      <form onSubmit={handleSubmit(login)} className="flex-[0.5] flex flex-col items-center justify-center gap-9 px-6 w-full">
          <div className='flex flex-col items-center justify-center gap-6 w-full sm:w-[280px] md:w-[300px] lg:w-[356px] xl:w-[400px]'>
              <div className='flex flex-col gap-2 w-full'>
                  <label>E-mail</label>
                  <Input type="email" {...register("email", {required: "L'e-mail est obligatoire."})} className='h-[45px] border-2 border-gray-400 rounded-lg px-3 bg-white' placeholder='Entrez votre e-mail' />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
              </div>
              <div className='flex flex-col gap-2 w-full'>
                  <label>Mot de passe</label>
                  <Input type="password" {...register("password", {required: "Le mot de passe est obligatoire."})} className='h-[45px] border-2 border-gray-400 rounded-lg px-3 bg-white' placeholder='Entrez votre mot de passe' />
                  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
              </div>
          </div>
          <Button type='submit' color='normalGreen' variant='contained'>Se connecter</Button>
      </form>

    </div>
  )
}

