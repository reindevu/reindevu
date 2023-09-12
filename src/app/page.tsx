import { assets } from '@/shared/config/images'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container m-auto h-full">
      <div className="flex flex-col lg:flex-row gap-[10px] min-h-screen p-[50px] border-b">
        <Image src={assets.me} alt="me" width="650" height="456" className="object-cover w-full flex-1 lg:w-auto" />
        <div className="flex flex-col justify-center items-center w-full mt-[40px] lg:mt-0">
          <Image src={assets.logo_black} alt="logo" width="120" height="102" className="flex-1" />
          <h1 className="text-[30px] lg:text-[50px] font-black text-[#242424]">Яковлев Павел</h1>
          <p className="text-[16px] font-medium text-[#242424]">Middle frontend-разработчик</p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] flex flex-col justify-center lg:grid lg:grid-cols-12 lg:items-center border-b">
        <Image
          src={assets.karnast}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">Карнаст</h2>
          <p className="text-md text-[#242424]">
            Сейчас это является мои основным проектом.
            Цель проекта это раннее выявление одаренности и профессиональных предпочтений обучающихся.
            <br /><br />
            Опрос был разработам профессором Чувашской Республики Волковым Олегом Гавриловичем он и является частью нашей команды.
            Проект был проведен в рамках тестирования по всем школам Чебоксар и в одной гимназии Казани в мае 2023 года и с 1 сентября 2023 года запущен по все Чувашской Республике.
            Приложение предоставляет возмоность учителям/завучам/директорам смотреть статистику по классам и определять в каких классах больше людей по тем или иным направлениям и опроса.
            Также учащиеся могут после прохождения опроса посмотреть какие колледжи/вузы/курсы в России подходят им исходя из пройденного опроса.
            <br /><br />
            На проекте я занимаюсь всей разработкой фронт и бэк, по фронту не много помогает друг который тоже является нашим участником.
          </p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] lg:grid  lg:grid-cols-12 items-center border-b">
        <Image
          src={assets.generepass}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">Генератор паролей</h2>
          <p className="text-md text-[#242424]">
            Этот проект делал в самом начале когда обучался React`у, помимо генерации пароля можно сохранить пароли(они хранятся в IndexedDB) и их можно скачать
          </p>
        </div>
      </div>

      <div id="karnast" className="min-h-screen p-[16px] lg:p-[50px] gap-[40px] lg:grid  lg:grid-cols-12 items-center border-b">
        <Image
          src={assets.gym_center}
          width="940"
          height="570"
          alt="karnast"
          className="lg:col-span-7 w-full lg:w-auto"
        />
        <div className="lg:col-span-5 mt-[40px] lg:mt-0">
          <h2 className="text-[40px] font-bold mb-[30px] text-[#242424]">GYM-center</h2>
          <p className="text-md text-[#242424]">
            Макет был взят из телеграм-канала "True Figma", просто верстка
          </p>
        </div>
      </div>
    </main>
  )
}
