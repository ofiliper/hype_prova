import { useState } from "react";
const Address = () => {

    const [cep, setCEP] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [uf, setUF] = useState('')

    const findCEP = e => {
        fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
            .then(res => res.json())
            .then(res => {
                setCEP(e.target.value)
                setBairro(res.bairro);
                setCidade(res.localidade)
                setLogradouro(res.logradouro)
                setUF(res.uf)
            })
    }

    return (
        <div className="address">
            <div className="col-2">
                <div>
                    <label>CEP </label>
                    <input type="text" onBlur={findCEP} onChange={(e) => { setCEP(e.target.value) }} value={cep} />
                </div>
                <div>
                    <label>Estado: </label>
                    <select onChange={(e) => { setUF(e.target.value) }} value={uf.toUpperCase()}>
                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>
                </div>
            </div>

            <div className="col-2">
                <div>
                    <label>Cidade: </label>
                    <input type="text" onChange={(e) => { setCidade(e.target.value) }} value={cidade} />
                </div>
                <div>
                    <label>Bairro: </label>
                    <input type="text" onChange={(e) => { setBairro(e.target.value) }} value={bairro} />
                </div>
            </div>
            <div className="col-2">
                <div>
                    <label>Rua: </label>
                    <input type="text" onChange={(e) => { setLogradouro(e.target.value) }} value={logradouro} />
                </div>
                <div>
                    <label>Nº: </label>
                    <input type="text" />
                </div>
            </div>
        </div>

    )
}
export default Address;