import React, { useState } from 'react';
import { Button, Row } from 'reactstrap';
import { Input } from 'reactstrap';
import { Form } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Col } from 'reactstrap';

import { Card, CardHeader } from 'reactstrap';
import { CardBody } from 'reactstrap';
import { CardTitle } from 'reactstrap';


import './Tarefas';
import './App.css';
import Tarefas from './Tarefas';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputTarefa, setInputTarefa] = useState('');
  const [inputData, setInputData] = useState('');

  function handleAdd() {
    setTarefas([...tarefas, { 'tarefa': inputTarefa, 'data': inputData }]);
    setInputTarefa('');
    setInputData('');
  }


  return (
    <main>
      <div className="container">
        <div className='row'>

          <div className='col-md-6 mt-5'>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">
                  Cadastrar Tarefas
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row form>

                    <Col>
                      <FormGroup>
                        <Label htmlFor='tarefa'>
                          Tarefa
                        </Label>
                        <Input
                          value={inputTarefa}
                          onChange={e => setInputTarefa(e.target.value)}
                          placeholder="tarefa"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <Label htmlFor='data'>
                        Data
                      </Label>
                      <Input
                        value={inputData}
                        onChange={e => setInputData(e.target.value)}                        
                        type="date"
                      />
                    </Col>
                    <hr/>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Button onClick={handleAdd} color='primary'>
                        Cadastrar
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>

          <div className='col-md-6 mt-5'>
            <Tarefas tarefas={tarefas} setTarefas={setTarefas}></Tarefas>
          </div>

        </div>

      </div>
    </main>
  );
}

export default App;
