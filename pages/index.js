import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
const Nav = styled.nav`
	font-size: 40px;
	color: ${({ theme }) => theme.colors.primary.dark};
`

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sign in </title>
			</Head>
			<Nav>
				<Link href='/login'>
					<a>hello</a>
				</Link>
			</Nav>
		</div>
	)
}
