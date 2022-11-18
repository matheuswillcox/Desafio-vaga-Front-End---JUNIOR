import StyledForm from "./Form.styles";
import Input from "../input/Input";
import { useReducer, useEffect, useState } from "react";
import CurrencyInput from "../currencyInput/CurrencyInput";
import { toBRL } from "../../helpers/currency";
import {
  StateTypes,
  ActionTypes,
  ActionTypesTypes,
  ResultTypes,
} from "./Form.types";
import { installmentsAnticipationService as iaService } from "../../services/installmentsAnticipation/installmentsAnticipation";

const initialState = {
  amount: "R$ 0,00",
  installments: "0",
  mdr: "0",
};

const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
  const { type, payload } = action;
  const actions = {
    amount: (payload: string): StateTypes => ({ ...state, amount: payload }),
    installments: (payload: string): StateTypes => ({
      ...state,
      installments: payload,
    }),
    mdr: (payload: string): StateTypes => ({ ...state, mdr: payload }),
  };
  return actions[type](payload) as typeof initialState;
};

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [results, setResults] = useState<ResultTypes[]>([] as ResultTypes[]);

  const handleChange = (e: string, type: ActionTypesTypes) => {
    dispatch({ type, payload: e });
  };

  const fetchAnticipation = (payload: StateTypes) => {
    iaService.post(payload).then((res) => {
      const mappedResult = Object.entries(res.data).map((item) => ({
        date: item[0],
        amount: item[1],
      }));
      setResults(mappedResult as []);
    });
  };
  const renderResult = (payload: ResultTypes[]) => {
    return (
      <>
        <div>
          {" "}
          Amanhã:{" "}
          <span className="value">{toBRL(+payload[0]?.amount ?? 0, true)}</span>
        </div>
        <div>{`Em 15 dias: ${toBRL(+payload[1]?.amount ?? 0, true)}`}</div>
        <div>{`Em 30 dias: ${toBRL(+payload[2]?.amount ?? 0, true)}`}</div>
        <div>{`Em 90 dias: ${toBRL(+payload[3]?.amount ?? 0, true)}`}</div>
      </>
    );
  };

  useEffect(() => {
    if (state.mdr && state.installments && Number(state.amount) >= 1000) {
      const mappedState = {
        mdr: Number(state.mdr),
        installments: Number(state.installments),
        amount: Number(state.amount),
      };

      fetchAnticipation(mappedState);
    }
  }, [state]);

  return (
    <StyledForm>
      <form>
        <h2 className="form-title">Simule sua Antecipação</h2>
        <CurrencyInput
          label="Informe o valor da venda"
          value={state.amount.toString()}
          onChange={(e: string) => handleChange(e, "amount")}
          description=""
        />
        <Input
          label="Em quantas parcelas"
          value={state.installments.toString()}
          onChange={(e: string) => handleChange(e, "installments")}
          description="Máximo de 12 parcelas"
          type="number"
        />
        <Input
          label="Informe o percentual de MDR"
          value={state.mdr.toString()}
          onChange={(e: string) => handleChange(e, "mdr")}
          description=""
          type="number"
        />
      </form>
      <div className="results">
        <div>
          <h2 className="results-title">VOCÊ RECEBERÁ:</h2>
          <div className="underline">___________________________</div>
        </div>
        <div className="results-days">{renderResult(results)}</div>
      </div>
    </StyledForm>
  );
}

export default Form;
