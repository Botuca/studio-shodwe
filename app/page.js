'use client';
import InputData from './components/InputData';
import MainLayout from './layouts/MainLayout';

export default function Home() {
  return (
    <div className="h-full">
      <MainLayout>
        <div className="mt-[80px] w-[calc(100%-90px) max-w-[690px] mx-auto bg-black bg-opacity-50 rounded-[10%] p-12 text-white">
          <p className="font-bold text-4xl">CADASTRO</p>
          <div className="w-[200px] h-1 bg-[#8D1CFF5B] mb-12 mt-2" />

          <div className="flex flex-col gap-4">
            <InputData name="Nome completo:" />
            <InputData name="E-mail:" />

            <div className="flex gap-8 w-[46%]">
              <InputData name="Gênero:" />
              <InputData name="Data de nascimento:" />
            </div>

            <InputData name="Nome de usuário:" />

            <div className="flex gap-8 w-[46%]">
              <InputData name="Senha:" />
              <InputData name="Confirmar senha:" />
            </div>

            <button className="w-full bg-green-500 rounded-full mt-8 p-2 hover:bg-green-600">
              Cadastrar
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
