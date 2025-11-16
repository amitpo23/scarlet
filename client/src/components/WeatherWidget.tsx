import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    // Tel Aviv coordinates: 32.0809, 34.7806
    fetch('https://api.open-meteo.com/v1/forecast?latitude=32.0809&longitude=34.7806&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto')
      .then(res => res.json())
      .then(data => {
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          windSpeed: Math.round(data.current.wind_speed_10m),
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch weather:', err);
        setLoading(false);
      });
  }, []);

  const getWeatherIcon = (code: number) => {
    // WMO Weather interpretation codes
    if (code === 0) return <Sun className="w-8 h-8 text-yellow-500" />;
    if (code <= 3) return <Cloud className="w-8 h-8 text-gray-400" />;
    if (code <= 67) return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (code <= 77) return <CloudSnow className="w-8 h-8 text-blue-300" />;
    return <Cloud className="w-8 h-8 text-gray-400" />;
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return t("בהיר", "Clear sky");
    if (code <= 3) return t("מעונן חלקית", "Partly cloudy");
    if (code <= 67) return t("גשום", "Rainy");
    if (code <= 77) return t("שלג", "Snow");
    return t("מעונן", "Cloudy");
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-sm">
        <div className="animate-pulse flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
      {getWeatherIcon(weather.weatherCode)}
      <div className="flex flex-col">
        <div className="text-lg font-bold">{weather.temperature}°C</div>
        <div className="text-xs text-muted-foreground">{getWeatherDescription(weather.weatherCode)}</div>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Wind className="w-3 h-3" />
        <span>{weather.windSpeed} km/h</span>
      </div>
    </div>
  );
}
