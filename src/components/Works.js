import React from 'react'
import styled from 'styled-components'

import { Controls } from './Redeem'

const WorksFrame = styled.div`
  width: 100%;
  padding: 24px;
  padding-top: 16px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: 600;
  /* line-height: 170%; */
  /* text-align: center; */
`
const Title = styled.p`
  margin-top: 1rem !important;

  font-weight: 600;
  font-size: 16px;
`

const Desc = styled.p`
  line-height: 150%;
  font-size: 14px;
  margin-top: 1rem !important;
  font-weight: 500;
`

export function link(hash) {
  return `https://etherscan.io/tx/${hash}`
}

export const EtherscanLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.uniswapPink};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`

export default function Works({ closeCheckout }) {
  return (
    <WorksFrame>
      <Controls closeCheckout={closeCheckout} theme={'dark'} />

      <Title>How it works:</Title>
      <Desc>
        $NIXIE is a token that entitles you to 1 real NFT Nixie limited edition clock, shipped anywhere in the world.
      </Desc>
      <Desc>
        You can sell the token back at any time. To get a <i>real</i> pair, redeem a $NIXIE token
      </Desc>
      <Title>How it's priced:</Title>
      <Desc>
        $NIXIE tokens are listed starting at $500 USD. Each buy/sell will move the price. The increase or decrease
        follows a{' '}
        <a
          href="https://blog.relevant.community/bonding-curves-in-depth-intuition-parametrization-d3905a681e0a"
          target="_blank"
          rel="noopener noreferrer"
        >
          bonding curve
        </a>
        . $NIXIE will eventually find an equillibrium based on market demand.
      </Desc>
      <Title>Unipay:</Title>
      <Desc>
        Buying or selling NIXIE uses the uniswap protocol and accepts any token input as a payment method. The pool of
        NIXIE is a uniswap pool where 500 NIXIE tokens were deposited along with the starting value of ETH.{' '}
      </Desc>
      <Desc>
        <a href="https://docs.uniswap.io/" target="_blank" rel="noopener noreferrer">
          Learn more about how uniswap works.
        </a>
      </Desc>
      <Desc>
        <a href="mailto:nftnixie@protonmail.com" target="_blank" rel="noopener noreferrer">
          Get in touch.
        </a>
      </Desc>
      <Desc>
        This project is a fork of the Unisocks project.  <a href="https://unisocks.exchange/" target="_blank" rel="noopener noreferrer"></a>
      </Desc>
    </WorksFrame>
  )
}
