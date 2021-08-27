import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary.dark};
`

export default function Home() {
	return (
		<div>
			<Head>
				<title>Sign in </title>
			</Head>
			<Nav>hello</Nav>
			<Nav>{/* <Link href=''></Link> */}</Nav>
		</div>
	)
}
