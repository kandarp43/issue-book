import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.div`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary.dark};
`

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sign in </title>
			</Head>
			<Title>hii</Title>
		</div>
	)
}
