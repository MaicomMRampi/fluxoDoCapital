import * as Yup from "yup"
import { parseDate, getLocalTimeZone, today, parseZonedDateTime } from "@internationalized/date";

const initialValues = {
    nome: '',
    instituicao: '',
    valorInvestido: '',
    dataCompra: today(getLocalTimeZone()),
    dataVencimento: '',
};

// ... (Função Label - Se necessário) 

const validationSchema = Yup.object().shape({
    nome: Yup.string().required('Campo é obrigatório'),
    instituicao: Yup.string().required('Campo é obrigatório'),
    valorInvestido: Yup.string().required('Campo é obrigatório'),
    dataCompra: Yup.date().required('Campo é obrigatório'),
    dataVencimento: Yup.date().required('Campo é obrigatório'),
});

export { initialValues, validationSchema }