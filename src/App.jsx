import React, {useState} from 'react';
import {Button, TextField, Grid, Alert  } from '@mui/material';
function App() {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState({});
    const [imc, setImc] = useState(false);

    const handleWeightChange = event => {
        setWeight(event.target.value);
    };

    const handleHeightChange = event => {
        setHeight(event.target.value);
    };

    const calculate = () => {
        const imc = weight / (height * height);

        if (imc < 18.5) {
            setResult({
                message: 'Magreza, quando o resultado é menor que 18,5 kg/m2',
                imc
            })
        }

        if (imc >= 18.5 && imc <= 24.9) {
            setResult({
                message: 'Normal, quando o resultado está entre 18,5 e 24,9 kg/m2',
                imc
            })
        }

        if (imc >= 25 && imc <= 29.9) {
            setResult({ message: 'Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2', imc })
        }

        if (imc >= 30) {
            setResult({ message: 'Obesidade, quando o resultado é maior que 30 kg/m2', imc })
        }

        setImc(true)
    }


    return (
        <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item xs={8}>
                <TextField
                    required
                    type='number'
                    id="filled-basic"
                    label="Peso"
                    onChange={handleWeightChange}
                    variant="standard"
                />
            </Grid>

            <Grid item xs={8}>
                <TextField
                    required
                    type='number'
                    id="filled-basic"
                    label="Altura"
                    variant="standard"
                    onChange={handleHeightChange}
                />
            </Grid>
            <Grid item xs={8}>
                <Button variant="contained" onClick={() => calculate()} >
                    Calcular
                </Button>

            </Grid>

            {imc &&
                <>
                    <Grid item xs={8}>
                        <Alert severity="info">Seu IMC é {Math.round(result.imc)}</Alert>
                    </Grid>
                    <Grid item xs={8}>
                        <Alert severity="info">{result.message}</Alert>
                    </Grid>
                </>
            }

        </Grid>

    );
}

export default App;
