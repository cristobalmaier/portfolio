import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#111111',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ff5555',
                    fontFamily: 'monospace',
                    fontWeight: 800,
                    border: '1px solid #2a2a2a',
                    borderRadius: 4,
                    paddingBottom: 2, // Ajuste óptico vertical
                    paddingLeft: 3 // Ajuste óptico horizontal
                }}
            >
                &gt;
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
