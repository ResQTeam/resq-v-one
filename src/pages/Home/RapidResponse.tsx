import RapidResponseForm from './RapidResponseForm';

const RapidResponse = () => {
  return (
    <section className="bg-white">
      <div className="resq-container">
        <h2 className="pt-9 mb-4 md:pt-24 text-resq-dark-400 text-[0.9375rem] md:text-3xl font-bold">
          Rapid Response Request
        </h2>
        <div className="w-full bg-white rounded-[1.25rem] p-7 shadow-[1px_1px_20px_10px_rgba(0,0,0,0.05)] md:pt-6 md:pb-10">
          <RapidResponseForm />
        </div>
      </div>
    </section>
  );
};

export default RapidResponse;
