import StyledForm from "./Form.styles";
import Input from "../input/Input";
import { useReducer } from "react";

const initialState = {
    amount : 0,
    installments: 0,
    mdr: 0
}

type FormState = {
    amount : string | number,
    installments: string | number,
    mdr: string | number

}

const reducer = (state: any, action:{payload: FormState, type: string }) => {
    const actions = {
        amount : (payload: FormState)=> ({...state, amount: payload.amount}),
        installments: (payload: FormState)=> ({...state, installments: payload.installments}),
        mdr: ()=> (payload: FormState)=> ({...state, mdr: payload.mdr}),
    }
    return actions[action.type]?.(action.payload)?? state
} 


function Form() {
  const [state, dispatch] = useReducer<any>(reducer, initialState)   
  return (
    <StyledForm>
      <form>
        <h2 className="form-title">Simule sua Antecipação</h2>
        <Input
          label="Informe o valor da venda"
          value="1000"
          onChange={() => {}}
          description=""
          type="number"
        />
        <Input
          label="Em quantas parcelas"
          value=""
          onChange={() => {}}
          description="Máximo de 12 parcelas"
          type="number"
        />
        <Input
          label="Informe o percentual de MDR"
          onChange={() => {}}
          value=""
          description=""
          type="number"
        />
      </form>
      <div className="results">
        <h2 className="results-title">VOCÊ RECEBERÁ</h2>
        <div className="results-days"></div>
      </div>
    </StyledForm>
  );
}

export default Form;
