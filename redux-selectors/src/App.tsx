import React from 'react';

import { Box, Button, Text, MantineProvider } from '@mantine/core';
import  { useSelector, useDispatch, Provider, shallowEqual } from 'react-redux';
import { store, addToFirst, RootState, addToSecond, doNothing } from './stores';

const DoNothingButton = () => {
  const dispatch = useDispatch();
  return <Button size="xl" onClick={() => dispatch(doNothing())}>Add To First</Button>
}

const AddToFirstButton = () => {
  const dispatch = useDispatch();
  return <Button size="xl" onClick={() => dispatch(addToFirst())}>Add To First</Button>
}

const FirstValue = () => {
  const firstNumber = useSelector((state: RootState) => state.firstNumber);
  return <Text p={10}>First Value: {firstNumber}</Text>
}

const AddToSecondButton = () => {
  const dispatch = useDispatch();
  return <Button size="xl" onClick={() => dispatch(addToSecond())}>Add To Second</Button>
}

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber);
  return <Text p={10}>Second Value: {secondNumber}</Text>
}

const NumbersValue = () => {
  const numbers = useSelector((state: RootState) => state.numbers, shallowEqual);
  return <Text p={10}>Numbers Value: {numbers.join(", ")}</Text>
}

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Provider store={store}>
      <Box p={10}>
        <Box sx={{
          display : 'flex',
        }}>
          <DoNothingButton />
        </Box>
      </Box>
      <Box p={10} mt={10}>
        <Box sx={{
          display : 'flex',
        }}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
      </Box>
      <Box p={10}>
        <Box sx={{
          display : 'flex',
        }}>
          <AddToSecondButton />
          <SecondValue />
        </Box>
      </Box>
      <NumbersValue />
      </Provider>
    </MantineProvider>
  );
}

export default App;
