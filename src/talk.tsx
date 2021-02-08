import {useCurrentFrame} from 'remotion';

export function Talk() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: '#111',
				color: '#fafafa',
				fontSize: '5em',
				height: '100%',
				width: '100%',
			}}
		>
			<div>
				<h1>Hello World</h1>
				<pre>Frame: {useCurrentFrame()}</pre>
			</div>
		</div>
	);
}
