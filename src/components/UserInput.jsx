import InputBlock from "./InputBlock";
import "./UserInput.css";

export default function UserInput() {
  return (
    <>
      <div className="calc-input">
        <InputBlock name="initial" title="Начальная сумма" />
        <InputBlock name="annualInvestment" title="Вложения за год" />
        <InputBlock name="roi" title="Ожидаемый возврат" />
        <InputBlock name="duration" title="Срок" />
      </div>
    </>
  );
}
