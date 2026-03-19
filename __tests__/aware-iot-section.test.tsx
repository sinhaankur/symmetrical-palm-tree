import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AwareIotSection } from '../components/aware-iot-section';

describe('AwareIotSection', () => {
  it('renders the upcoming IoT section with all features', () => {
    render(<AwareIotSection />);
    expect(screen.getByText('Aware IoT (Upcoming)')).toBeInTheDocument();
    expect(screen.getByText('Prevent problems before they happen with our upcoming Aware IoT module.')).toBeInTheDocument();
    expect(screen.getByText('Water leak detection sensors')).toBeInTheDocument();
    expect(screen.getByText('HVAC performance monitoring')).toBeInTheDocument();
    expect(screen.getByText('Electrical system alerts')).toBeInTheDocument();
    expect(screen.getByText('Temperature and humidity tracking')).toBeInTheDocument();
    expect(screen.getByText('Automated staff notifications')).toBeInTheDocument();
    expect(screen.getByText('Historical trend analysis')).toBeInTheDocument();
    expect(screen.getByText('Coming soon')).toBeInTheDocument();
  });
});
