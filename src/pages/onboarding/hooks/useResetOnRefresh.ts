import { useEffect } from 'react';

/**
 * 새로고침 시 특정 조건을 만족하지 않으면 초기 스텝으로 이동시키는 커스텀 훅입니다.
 *
 * 이 훅은 주로 페이지 리프레시 시, 사용자의 현재 위치(`currentStep`)가
 * 허용된 스텝(`allowedStep`)이 아닐 경우, 사용자를 강제로 초기 스텝(`initialStep`)으로 이동시키고자 할 때 사용됩니다.
 *
 * 일반적인 예시로는, 특정 스텝 이전의 과정이 완료되어야만 접근 가능한 스텝에서,
 * 새로고침으로 인해 선행 조건 없이 해당 스텝으로 접근되는 상황을 방지하고자 할 때 사용합니다.
 *
 * @param currentStep 현재 위치한 스텝 이름
 * @param allowedStep 새로고침 시 접근이 허용된 스텝
 * @param initialStep 조건을 만족하지 않을 경우 이동할 초기 스텝
 * @param goTo 스텝 이동을 위한 함수
 *
 */
const useResetOnRefresh = ({
  currentStep,
  allowedStep = 'COMPLETE',
  initialStep = 'GROUP_ROLE',
  goTo,
}: {
  currentStep: string;
  allowedStep?: string;
  initialStep: string;
  goTo: (stepName: string) => void;
}) => {
  useEffect(() => {
    if (currentStep !== allowedStep && currentStep !== initialStep) {
      goTo(initialStep);
    }
  }, [currentStep, allowedStep, initialStep, goTo]);
};

export default useResetOnRefresh;
