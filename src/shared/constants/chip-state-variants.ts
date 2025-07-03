import { cva } from 'class-variance-authority';

export const chipStateVariants = cva(
	'inline-flex items-center px-[0.8rem] py-[0.4rem] cap_12_m rounded-[8px]',
	{
		variants: {
			state: {
				매칭률: 'bg-main-900 text-gray-white',
				'매칭 완료': 'bg-main-900 text-gray-white',
				'승인 완료': 'bg-main-900 text-gray-white',
				'새 요청': 'bg-main-900 text-gray-white',
				'매칭 실패': 'bg-gray-200 text-gray-700',
				'요청 대기 중': 'bg-gray-200 text-gray-700',
				'승인 대기 중': 'bg-gray-200 text-gray-700',
				default: 'bg-gray-200 text-gray-700',
			},
		},
		defaultVariants: {
			state: 'default',
		},
	},
);
