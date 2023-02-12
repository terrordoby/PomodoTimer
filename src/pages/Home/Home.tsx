import { HandPalm, Play } from "phosphor-react";
import React, { useEffect, useState } from "react";
import { Container, ContainerBody, ContainerFooter, ContainerHeader, MinutesAmountInput, Separator, TaskInput } from "./styles";
import {useForm} from "react-hook-form";
import {differenceInSeconds} from "date-fns";

interface InputsProps {
  task: string;
  minutesAmount: number;
}

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptDate?: Date;
  fineshedDate?: Date;
}

const Home = () => {

  const [cycle, setCycle] = useState<Cycle[]>([]);
  const [isActiveCycle, setIsActiveCycle] = useState<string | null>(null);
  const activeCycle = cycle.find((obj) => obj.id === isActiveCycle);
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const [amountSecondPassed, setAmountSecondPassed] = useState<number>(0);

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  const {register, handleSubmit, watch, reset} = useForm<InputsProps>({
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  });

  console.log(cycle);

  const task = watch("task");

  useEffect(() => {
    let interval: any;
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference =  (differenceInSeconds(new Date(), activeCycle.startDate));
        if (secondsDifference >= totalSeconds) {
          setCycle(cycle.map((cycle) => {
            if (cycle.id === isActiveCycle) {
              return {...cycle, fineshedDate: new Date()};
            } else {
              return cycle;
            }
          }));
          setAmountSecondPassed(totalSeconds);
          clearInterval(interval);
        } else {
          setAmountSecondPassed(secondsDifference);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  },[activeCycle, isActiveCycle]);

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`;
    }
  }, [minutes, seconds, activeCycle]);

  function handleSubmitInputs(data: InputsProps) {
    const newCycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };
    setCycle((prevState) => [...prevState, newCycle]);
    setIsActiveCycle(newCycle.id);
    setAmountSecondPassed(0);
    reset();
  }

  function stopCountdown(){

    setCycle(cycle.map((cycle) => {
      if (cycle.id === isActiveCycle) {
        return {...cycle, interruptDate: new Date()};
      } else {
        return cycle;
      }
    }));
    setIsActiveCycle(null);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitInputs)}>
        <ContainerHeader >
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            list="task-suggestions"
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            step="5"
            min="5"
            max="60"
            type="number"
            id="minutesAmount"
            placeholder="00"
            {...register("minutesAmount", {valueAsNumber: true})}
          />
          <span>minutos</span>
        </ContainerHeader>
        <ContainerBody>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </ContainerBody>
        {activeCycle ? (

          <ContainerFooter>
            <button
              className="interrupt"
              type="button"
              onClick={stopCountdown}
            >
              <HandPalm size={24} /> Parar
            </button>
          </ContainerFooter>
        ) : (
          <ContainerFooter>
            <button type="submit" disabled={!task}> <Play size={24} /> Começar</button>
          </ContainerFooter>
        )}
      </form>
    </Container>
  );
};

export default Home;
