import { Children, type ReactElement, type ReactNode, useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FunnelProps {
  children: ReactElement<{ name: string }>[];
}

interface StepProps {
  children: ReactNode;
}

export const useFunnel = <T extends readonly string[]>(steps: T, completePath: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const stepFromUrl = searchParams.get('step');
  const isValidStep = stepFromUrl && steps.includes(stepFromUrl as T[number]);
  const currentIndex = isValidStep ? steps.indexOf(stepFromUrl as T[number]) : 0;
  const currentStep = steps[currentIndex];

  const goTo = useCallback(
    (step: T[number]) => {
      if (!steps.includes(step)) return;
      setSearchParams({ step }, { replace: true });
    },
    [setSearchParams, steps],
  );

  const goNext = useCallback(() => {
    const next = steps[currentIndex + 1];
    if (next) {
      goTo(next);
    } else {
      navigate(completePath);
    }
  }, [currentIndex, steps, goTo, navigate, completePath]);

  const goPrev = useCallback(() => {
    const prev = steps[currentIndex - 1];
    if (prev) {
      goTo(prev);
    } else {
      navigate(-1);
    }
  }, [currentIndex, steps, goTo, navigate]);

  const Funnel = useMemo(() => {
    return ({ children }: FunnelProps) => {
      const childrenArray = Children.toArray(children) as ReactElement<{ name: string }>[];
      const matched = childrenArray.find((child) => child.props.name === currentStep);
      return <>{matched}</>;
    };
  }, [currentStep]);

  const Step = ({ children }: StepProps) => <>{children}</>;

  return {
    currentStep,
    currentIndex,
    steps,
    goTo,
    goNext,
    goPrev,
    Funnel,
    Step,
  };
};
