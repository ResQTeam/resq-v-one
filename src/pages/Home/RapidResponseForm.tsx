import Select, { SingleValue } from 'react-select';

import { serviceOptions } from '../../utils/options';

const RapidResponseForm = () => {
  const handleChange = (
    selectedOption: SingleValue<{ value: string; label: string }>
  ) => {
    console.log(selectedOption);
  };
  return (
    <form className="w-full space-y-4">
      <div className="space-y-4 md:space-y-0 md:flex md:gap-x-7">
        <div className="md:w-1/2">
          <label
            htmlFor="service"
            className="text-sm/[1.125rem] text-resq-brand-main mb-[6px]"
          >
            Service Type
          </label>
          <Select
            options={serviceOptions}
            onChange={handleChange}
            id="service"
          />
        </div>
        <div className="md:w-1/2">
          <label
            htmlFor="service"
            className="text-sm/[1.125rem] text-resq-brand-main mb-[6px]"
          >
            Location
          </label>
          <Select
            options={serviceOptions}
            onChange={handleChange}
            id="service"
          />
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
        <div className="md:w-1/4">
          <label
            htmlFor="service"
            className="text-sm/[1.125rem] text-resq-brand-main mb-[6px]"
          >
            Age
          </label>
          <Select
            options={serviceOptions}
            onChange={handleChange}
            id="service"
          />
        </div>
        <div className="md:w-1/4">
          <label
            htmlFor="service"
            className="text-sm/[1.125rem] text-resq-brand-main mb-[6px]"
          >
            Gender
          </label>
          <Select
            options={serviceOptions}
            onChange={handleChange}
            id="service"
          />
        </div>
        <div className="md:w-1/4">
          <label
            htmlFor="service"
            className="text-sm/[1.125rem] text-resq-brand-main mb-[6px]"
          >
            Emergency
          </label>
          <Select
            options={serviceOptions}
            onChange={handleChange}
            id="service"
          />
        </div>
        <div className="flex justify-end md:block">
          <button className="bg-resq-brand-main hover:bg-resq-brand-dark text-white px-9 py-3 rounded-full text-center text-sm md:mt-5">
            Request Access
          </button>
        </div>
      </div>
    </form>
  );
};

export default RapidResponseForm;
