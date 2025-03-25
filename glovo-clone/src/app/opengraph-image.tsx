import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Muriithi Empire Farms | Farm Fresh Produce';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#15803d', // Green background
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
              }}
            >
              {['🌱', '🌿', '🍃', '🥑', '🐔', '🥬', '🍎', '🥛', '🍯'][i % 9]}
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '4px solid white',
              fontSize: '40px',
              fontWeight: 'bold',
              color: 'white',
              marginRight: '20px',
            }}
          >
            M
          </div>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            Muriithi Empire Farms
          </div>
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            maxWidth: '800px',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          Farm Fresh Produce
        </div>
        <div
          style={{
            fontSize: '24px',
            color: 'white',
            marginTop: '10px',
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '800px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          From our family farms to your table
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            gap: '20px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '20px',
              borderRadius: '16px',
              width: '160px',
            }}
          >
            <div style={{ fontSize: '40px' }}>🐔</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>Poultry</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '20px',
              borderRadius: '16px',
              width: '160px',
            }}
          >
            <div style={{ fontSize: '40px' }}>🥑</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>Avocados</div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.15)',
              padding: '20px',
              borderRadius: '16px',
              width: '160px',
            }}
          >
            <div style={{ fontSize: '40px' }}>🥬</div>
            <div style={{ color: 'white', fontWeight: 'bold', marginTop: '10px' }}>Vegetables</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
