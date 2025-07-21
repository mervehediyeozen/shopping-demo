import { render, screen } from '@testing-library/react';
import Signin from './index'; // Signin bileşenini import ediyoruz
import '@testing-library/jest-dom';
import '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("SIGNIN EKRANI TEST", () => {

  let btn, inptName;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Signin />
      </BrowserRouter>
    );
    btn = screen.getByRole('button'); // Butonun render edilip edilmediği kontrol ediliyor
    inptName = screen.getByLabelText('İsminiz');  // 'İsminiz' label'ına sahip input öğesinin doğru şekilde erişildiğini kontrol ediyoruz
  });

  test("İNPUT VE BUTON EKRANDA KONTROLÜ", () => {
    expect(btn).toBeInTheDocument();
    expect(inptName).toBeInTheDocument(); // 'İsminiz' input öğesinin render edildiği kontrol ediliyor
  });

  test ("İNPUTA YAZI GİRİNCE GÖZÜKSÜN", () => {
    let deneme="selam";
    userEvent.type(inptName, deneme)
    userEvent.click(btn)
    expect(screen.getByDisplayValue(deneme)).toBeInTheDocument();

  }
)
});