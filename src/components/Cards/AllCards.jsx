

const AllCards = ({card}) => {
    const { picture, title, category, category_bg_color,card_bg_color, text_button_bg_color, description, price } = card || {};

    return (
        <div>
             <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
             style={{backgroundColor: card_bg_color}}
             >
        <div className="relative mx-4 mt-4 h-76 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={picture} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="mt-2 block text-sm text-white font-medium leading-normal antialiased p-[2px] mb-2"
          style={{color: category_bg_color
        }}
          >
            {category}
          </p>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed text-blue-gray-900 antialiased"
            style={{color: text_button_bg_color}}
            >
              {title}
            </p>
           
          </div>

        </div>
        
      </div>
    </div>
    );
};

export default AllCards;