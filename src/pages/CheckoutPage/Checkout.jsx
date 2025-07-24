import FormInput from '../../utils/FormInput';

const Checkout = () => {
  return (
    <main className='bg-stone-200 h-[calc(100dvh-5rem)]'>
      <p className='text-center text-2xl font-bold text-slate-950 pt-8'>
        Finalizar compra
      </p>
      <form className='grid grid-rows-5 grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8'>
        <FormInput
          fieldType='text'
          fieldName='Nome'
          id='name'
          placeholder='John'
          required
        />
        <p className='bg-blue-700'>elemento 1</p>
        <p className='bg-blue-700'>elemento 2</p>
        <p className='bg-blue-700'>elemento 3</p>
        <p className='bg-blue-700'>elemento 4</p>
        <p className='bg-blue-700'>elemento 5</p>
        <p className='bg-blue-700'>elemento 6</p>
      </form>
    </main>
  );
};

export default Checkout;
