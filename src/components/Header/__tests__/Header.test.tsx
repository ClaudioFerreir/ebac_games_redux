import { screen } from '@testing-library/react'

import Header from '..'

import { renderizaComProvider } from '../../../utils/tests'
import Produto from '../../Produto'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    const jogo = {
      id: 1,
      categoria: 'RPG',
      imagem: '',
      plataformas: ['Windows', 'Playstation 4', 'Xbox One'],
      preco: 199.9,
      precoAntigo: 299.9,
      titulo: 'Hogwarts Legacy'
    }
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  }),
    test('Deve renderizar com 2 itens no carrinho', () => {
      renderizaComProvider(<Header />, {
        preloadedState: {
          carrinho: {
            itens: [
              {
                id: 1,
                categoria: 'RPG',
                imagem: '',
                plataformas: ['Windows'],
                preco: 150.9,
                precoAntigo: 200.9,
                titulo: 'The Witcher 3: Wild Hunt'
              },
              {
                id: 2,
                categoria: 'RPG',
                imagem: '',
                plataformas: ['Windows', 'Playstation 4', 'Xbox One'],
                preco: 199.9,
                precoAntigo: 299.9,
                titulo: 'Cyberpunk 2077'
              }
            ]
          }
        }
      })
      expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
    })
})
