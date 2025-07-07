// chip-variants.ts
import { cva } from 'class-variance-authority';

export const chipVariantOptions = {
  bgColor: {
    두산: 'bg-team-doosan-background',
    LG: 'bg-team-lgtwins-background',
    롯데: 'bg-team-lottegiants-background',
    NC: 'bg-team-ncdinos-background',
    KIA: 'bg-team-kiatigers-background',
    한화: 'bg-team-hanhwaeagles-background',
    KT: 'bg-team-ktwiz-background',
    삼성: 'bg-team-samsunglions-background',
    SSG: 'bg-team-ssglanders-background',
    키움: 'bg-team-kiwoom-background',
    열정응원러: 'bg-sub-400',
    경기집중러: 'bg-sub-400',
    직관먹방러: 'bg-sub-400',
    default: 'bg-gray-200',
  },
  textColor: {
    두산: 'text-team-doosan-text',
    LG: 'text-team-lgtwins-text',
    롯데: 'text-team-lottegiants-text',
    NC: 'text-team-ncdinos-text',
    KIA: 'text-team-kiatigers-text',
    한화: 'text-team-hanhwaeagles-text',
    KT: 'text-team-ktwiz-text',
    삼성: 'text-team-samsunglions-text',
    SSG: 'text-team-ssglanders-text',
    키움: 'text-team-kiwoom-text',
    열정응원러: 'text-gray-800',
    경기집중러: 'text-gray-800',
    직관먹방러: 'text-gray-800',
    default: 'text-black',
  },
};

export const chipVariants = cva(
  'flex items-center px-[0.8rem] py-[0.4rem] cap_12_m rounded-[4px]',
  {
    variants: chipVariantOptions,
    defaultVariants: {
      bgColor: 'default',
      textColor: 'default',
    },
  },
);
