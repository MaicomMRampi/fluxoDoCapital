"use client"
import React, { useEffect, useState } from "react";
import { Formik } from 'formik';
import { valorMask } from "@/components/Mask";
import ButtonEnviarDadosPadrao from "@/components/ButtonEnviarDadosPadrao";
import { api } from "@/lib/api";
import { initialValues, validationSchema } from "./fundosForm"
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import useToken from "@/components/hooks/useToken";
import { DatePicker } from "@nextui-org/date-picker";
import { parseDate, getLocalTimeZone, today, parseZonedDateTime } from "@internationalized/date";
import { I18nProvider } from '@react-aria/i18n'
import { Alert } from "@mui/material";
import TitlePage from "@/components/tituloPaginas";
import { useRouter } from "next/navigation";
import ModalNovaInstituicao from "@/components/ModalNovaInstituicao";

export default function App({ tipoInvestimento }: any) {
    const router = useRouter()
    const [banco, setBanco] = useState([])
    const { tokenUsuario } = useToken()
    const [messageTipoAlert, setmessageTipoAlert] = useState<string>()
    const [messageResposta, setMessageResposta] = useState<string>()
    const [modalOpenBanco, setModalOpenBanco] = useState<boolean>(false);
    const [modalOpenAcao, setModalOpenAcao] = useState<boolean>(false);

    const buscaBanco = async () => {
        if (!tokenUsuario) return
        try {
            const response = await api.get('/buscabanco', {
                params: {
                    id: tokenUsuario?.id,
                }
            })
            setBanco(response.data)

        }
        catch (error) {
        }
    }

    useEffect(() => {
        buscaBanco()
    }, [])

    const handleSubmit = async (values: any) => {
        const valorParaBack = {
            ...values,
            tipoInvestimento: tipoInvestimento,
        }
        const response = await api.post('/novoinvestimento', {
            dados: valorParaBack,
            token: tokenUsuario?.id,
        });

        if (response.status === 200) {
            setMessageResposta('Investimento Cadastrado com Sucesso');
            setmessageTipoAlert('success');
        } else {
            setMessageResposta('Erro ao Cadastrar Investimento');
            setmessageTipoAlert('error');
        }
        setTimeout(() => {
            router.push('/pages/investimentos/listainvestimento')
            setMessageResposta('');
            setmessageTipoAlert('');

        }, 2000);

    };

    const handleSubmitModalBanco = async (values: any) => {
        try {
            const response = await api.post(`/banco`, {
                values,
                token: tokenUsuario?.id,
            })
            if (response.status === 200) {
                setmessageTipoAlert("success")
                buscaBanco()
                setMessageResposta(response.data.message)
                setTimeout(() => {
                    setMessageResposta("")
                    setModalOpenBanco(false)
                }, 2000)
            }
        } catch (error: any) {
            if (error.response && error.response.status === 400) {
                // O banco já está cadastrado
                setmessageTipoAlert("error")
                setMessageResposta(error.response.data.message)
                setTimeout(() => {
                    setMessageResposta("")
                    setModalOpenBanco(false)
                }, 2000)
            } else {
                // Outro erro inesperado
                console.error('Erro ao tentar cadastrar banco:', error);
                setmessageTipoAlert("error")
                setTimeout(() => {
                    setMessageResposta("")
                    setModalOpenBanco(false)
                }, 2000)
                setMessageResposta("Erro ao tentar cadastrar banco. Por favor, tente novamente mais tarde.")
            }
        }
    }
    const opemModalInstituicao = () => {
        setModalOpenBanco(true);
    }


    const titulos = [
        {
            tipo: 'Tesouro Direto',
            nome: 'Tesouro Selic 2024',
            vencimento: '2024-07-01',
            taxaJuros: 'Selic + 0.10%',
            valorMinimo: 1000,
        },
        {
            tipo: 'CDB',
            nome: 'CDB Banco XYZ',
            vencimento: '2026-12-31',
            taxaJuros: '120% do CDI',
            valorMinimo: 5000,
        },
        {
            tipo: 'LCI',
            nome: 'LCI Banco ABC',
            vencimento: '2025-09-30',
            taxaJuros: '95% do CDI',
            valorMinimo: 3000,
        },
        {
            tipo: 'LCA',
            nome: 'LCA Banco DEF',
            vencimento: '2027-01-15',
            taxaJuros: '100% do CDI',
            valorMinimo: 2000,
        },
        {
            tipo: 'Debênture',
            nome: 'Debênture XYZ 2028',
            vencimento: '2028-05-20',
            taxaJuros: 'IPCA + 5.5%',
            valorMinimo: 10000,
        },
    ];


    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    touched,
                }: any) => (
                    <form className="w-full gap-4 flex flex-col" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <Input
                                fullWidth
                                name="nome"
                                autoComplete="off"
                                isInvalid={touched.nome && !!errors.nome}
                                label="Nome do Fundo"
                                value={values.nome}
                                onChange={handleChange}
                            />
                            <Select
                                name="instituicao"
                                fullWidth
                                value={values.instituicao}
                                label="Instituição Financeira"
                                onChange={handleChange}
                                isInvalid={touched.instituicao && !!errors.instituicao}
                            >

                                {banco.map((item: any) => (
                                    <SelectItem value={item.nomeBanco} key={item.nomeBanco}>
                                        {item.nomeBanco}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Select
                                isInvalid={touched.tipoFundo && !!errors.tipoFundo}
                                name="tipoFundo"
                                fullWidth
                                label="Tipo de Fundo"
                                onChange={handleChange}
                                value={values.tipoFundo}
                            >
                                {/* Lista de tipos de fundos */}
                                {titulos.map(item => (
                                    <SelectItem value={item.nome} key={item.nome}>
                                        {item.nome}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Input
                                fullWidth
                                isInvalid={touched.valorInvestido && !!errors.valorInvestido}
                                name="valorInvestido"
                                autoComplete="off"
                                label="Valor Investido"
                                value={values.valorInvestido}
                                onBlur={handleChange}
                                onChange={(event) => {
                                    const { name, value } = event.target;
                                    if (name === 'valorInvestido') {
                                        const maskedValue = valorMask(value);
                                        setFieldValue(name, maskedValue);
                                    } else {
                                        setFieldValue(name, value);
                                    }
                                }}
                                startContent={<span className="text-white text-small">R$</span>}
                            />
                            <I18nProvider locale="pt-BR">
                                <DatePicker
                                    isInvalid={touched.dataCompra && !!errors.dataCompra}
                                    name="dataCompra"
                                    label="Data da Compra"
                                    onChange={(val) => setFieldValue("dataCompra", val)}
                                    defaultValue={today(getLocalTimeZone())}
                                />
                            </I18nProvider>
                        </div>
                        <Button fullWidth className="bg-buttonAzulClaro text-white" onClick={() => opemModalInstituicao()}>Nova Instituição</Button>
                        <ButtonEnviarDadosPadrao onSubmit={handleSubmit} isSubmiting={isSubmitting} />
                        {messageResposta && <Alert severity={messageTipoAlert as 'success' | 'info' | 'warning' | 'error'}>{messageResposta}</Alert>}
                    </form>
                )}
            </Formik >
            <ModalNovaInstituicao
                open={modalOpenBanco}
                onClose={() => setModalOpenBanco(false)}
                onSubmit={handleSubmitModalBanco}
                message={messageResposta}
                messageTipo={messageTipoAlert}
            />
        </>
    );
}