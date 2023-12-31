type ValueCardProps = {
  cardType: 'excellence' | 'innovative' | 'teamwork';
};

const ValueCard = ({ cardType }: ValueCardProps) => {
  return (
    <div className="relative flex flex-col items-center bg-resq-bg-about px-11 py-10 ">
      <div className="absolute -top-7 md:-top-10">
        {cardType === 'excellence' ? (
          <>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3.75rem] w-[3.75rem] md:h-[4.5rem] md:w-[4.5rem]"
            >
              <circle cx="36" cy="36" r="36" fill="#0A0A0A" />
              <path
                d="M42.596 28.8336C42.596 32.4894 39.6324 35.4531 35.9766 35.4531C32.3208 35.4531 29.3572 32.4894 29.3572 28.8336C29.3572 25.1778 32.3208 22.2142 35.9766 22.2142C39.6324 22.2142 42.596 25.1778 42.596 28.8336Z"
                fill="#F5F0F0"
                stroke="white"
              />
              <path
                d="M49.4284 28.8571C49.4284 30.1793 46.8386 31.0708 46.4524 32.2627C46.053 33.4981 47.6109 35.7451 46.8652 36.7735C46.1129 37.8119 43.4931 37.0172 42.4578 37.7718C41.4325 38.5197 41.3826 41.2675 40.1509 41.6682C38.9625 42.0555 37.3181 39.8752 35.9999 39.8752C34.6816 39.8752 33.0372 42.0555 31.8488 41.6682C30.6171 41.2675 30.5672 38.5197 29.5419 37.7718C28.5066 37.0172 25.8868 37.8119 25.1345 36.7735C24.3888 35.7451 25.9467 33.4981 25.5473 32.2627C25.1611 31.0708 22.5713 30.176 22.5713 28.8571C22.5713 27.5383 25.1611 26.6435 25.5473 25.4515C25.9467 24.2162 24.3888 21.9692 25.1345 20.9408C25.8868 19.9024 28.5066 20.6971 29.5419 19.9425C30.5672 19.1946 30.6171 16.4468 31.8488 16.0461C33.0372 15.6588 34.6816 17.839 35.9999 17.839C37.3181 17.839 38.9625 15.6588 40.1509 16.0461C41.3826 16.4468 41.4325 19.1946 42.4578 19.9425C43.4931 20.6971 46.1129 19.9024 46.8652 20.9408C47.6109 21.9692 46.053 24.2162 46.4524 25.4515C46.8353 26.6402 49.4284 27.535 49.4284 28.8571Z"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M35.7141 42.1601L41.4431 55.2826C41.826 56.159 43.0118 56.2575 43.3065 55.4389L44.2517 52.2899C44.4347 51.7769 45.0242 51.5765 45.5527 51.8483L48.6391 53.5977C49.4827 54.0291 50.2823 53.2648 49.9029 52.3918L43.2455 37.1428"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M36.8571 39.9725L30.3411 55.2826C29.9679 56.159 28.812 56.2575 28.5247 55.4389L27.6033 52.2899C27.4249 51.7769 26.8503 51.5765 26.3351 51.8483L23.3264 53.5977C22.5041 54.0291 21.7246 53.2648 22.0945 52.3918L28.5874 37.1428"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
            </svg>
          </>
        ) : cardType === 'innovative' ? (
          <>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3.75rem] w-[3.75rem] md:h-[4.5rem] md:w-[4.5rem]"
            >
              <circle cx="36" cy="36" r="36" fill="#0A0A0A" />
              <path
                d="M49.2452 30.2514C49.2452 22.0425 42.6113 15.4548 34.6492 16.0357C27.9626 16.5209 22.5339 22.1675 22.0385 29.1632C21.6028 35.3245 24.9092 40.7284 29.8284 43.151C30.5663 43.5149 31.0371 44.2906 31.0371 45.1435V48.5218V51.0731C31.0371 53.5361 32.7624 55.6977 35.1025 55.9697C37.8678 56.2896 40.2115 54.0324 40.2115 51.2018V45.1435C40.2115 44.2906 40.6858 43.5149 41.4237 43.151C46.0442 40.8681 49.2452 35.9531 49.2452 30.2514Z"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M40.208 48.327H31.0337"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M31.2842 36.2287C31.2842 33.6931 33.2529 31.6666 35.6226 31.6666C37.9923 31.6666 39.961 33.6931 39.961 36.2287V38.895C38.6748 39.6451 37.196 40.0702 35.6226 40.0702C34.0501 40.0702 32.5711 39.6423 31.2842 38.8944V36.2287Z"
                fill="#F5F0F0"
                stroke="white"
              />
              <path
                d="M35.6227 28.1706C31.5793 28.1706 28.2843 31.412 27.93 35.498C27.1221 34.0882 26.6567 32.4365 26.6567 30.6667C26.6567 25.4512 30.6915 21.2632 35.6227 21.2632C40.5539 21.2632 44.5887 25.4512 44.5887 30.6667C44.5887 32.4336 44.1234 34.0847 43.3152 35.4962C42.9602 31.4111 39.6656 28.1706 35.6227 28.1706Z"
                fill="#F5F0F0"
                stroke="white"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3.75rem] w-[3.75rem] md:h-[4.5rem] md:w-[4.5rem]"
            >
              <circle cx="36" cy="36" r="36" fill="#0A0A0A" />
              <path
                d="M50.2143 56C52.0478 56 53.3846 54.2212 52.9492 52.3827C51.3777 45.7587 45.5814 40.8398 38.6727 40.8398C31.7641 40.8398 25.9644 45.7587 24.3962 52.3863C23.9608 54.2247 25.2977 56 27.1311 56H50.2143Z"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M38.6728 37.5278C43.0708 37.5278 46.636 33.8505 46.636 29.3144C46.636 24.7783 43.0708 21.1011 38.6728 21.1011C34.2749 21.1011 30.7097 24.7783 30.7097 29.3144C30.7097 33.8505 34.2749 37.5278 38.6728 37.5278Z"
                stroke="white"
                strokeWidth="2.5"
                strokeMiterlimit="10"
              />
              <path
                d="M21.3277 51.1135L21.3278 51.1132C22.413 46.5374 24.8868 42.7315 29.0018 40.3349C23.9613 41.6662 19.7763 45.4535 18.5693 50.5404L21.3277 51.1135ZM21.3277 51.1135C21.1272 51.9614 21.2052 52.7998 21.491 53.5389M21.3277 51.1135L21.491 53.5389M21.491 53.5389H20.8176C19.3305 53.5389 18.2029 52.0882 18.5693 50.5406L21.491 53.5389Z"
                fill="#F5F0F0"
                stroke="white"
              />
              <path
                d="M37.244 17.9805C32.0279 17.9805 27.825 22.338 27.825 27.6797C27.825 27.9166 27.8333 28.1512 27.8497 28.3835C27.3121 27.2778 27.0085 26.0298 27.0085 24.7081C27.0085 20.1592 30.5785 16.5 34.9479 16.5C36.8893 16.5 38.6709 17.221 40.0536 18.42C39.1664 18.1345 38.2223 17.9805 37.244 17.9805Z"
                fill="#F5F0F0"
                stroke="white"
              />
            </svg>
          </>
        )}
      </div>
      <h4 className="font-bold leading-[0.9375rem] text-resq-dark-400 md:text-2xl">
        Excellence
      </h4>
      <p className="mt-4 text-center text-xs text-[#7d7d7d] md:text-lg">
        Lorem ipsum dolor sit amet consecte tur adipiscing elit olme semper
        olmethre.
      </p>

      <p className="mt-9 text-xs font-[500] capitalize text-resq-brand-main md:text-lg">
        Testimonials
      </p>
    </div>
  );
};

export default ValueCard;
