import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
  'cap_12_m flex-row-center rounded-[8px] px-[0.8rem] py-[0.4rem]',
  {
    variants: {
      colorType: {
<<<<<<< HEAD
<<<<<<< HEAD
        active: 'bg-main-900 text-gray-white',
        inactive: 'bg-gray-200 text-gray-700',
      },
    },
    defaultVariants: {
      colorType: 'inactive',
=======
        main: 'bg-main-900 text-gray-white',
        gray: 'bg-gray-200 text-gray-700',
},
    },
    defaultVariants:
{
  colorType: 'gray',
>>>>>>> 67606d8 (fix: chip state (#80)
  )
=======
        active: 'bg-main-900 text-gray-white',
        inactive: 'bg-gray-200 text-gray-700',
}
,
    },
    defaultVariants:
{
  colorType: 'inactive',
>>>>>>> 980e243 (feat: card 공통 컴포넌트 구현 (#77)
  )
}
,
  },
)
