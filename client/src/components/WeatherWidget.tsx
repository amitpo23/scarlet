import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
}

interface ForecastDay {
  date: string;
  maxTemp: number;
  minTemp: number;
  weatherCode: number;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForecast, setShowForecast] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    // Tel Aviv coordinates: 32.0809, 34.7806
    fetch('https://api.open-meteo.com/v1/forecast?latitude=32.0809&longitude=34.7806&current=temperature_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=6')
      .then(res => res.json())
      .then(data => {
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
          windSpeed: Math.round(data.current.wind_speed_10m),
        });
        
        // Get next 5 days (skip today)
        const forecastData = data.daily.time.slice(1, 6).map((date: string, idx: number) => ({
          date,
          maxTemp: Math.round(data.daily.temperature_2m_max[idx + 1]),
          minTemp: Math.round(data.daily.temperature_2m_min[idx + 1]),
          weatherCode: data.daily.weather_code[idx + 1],
        }));
        
        setForecast(forecastData);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch weather:', err);
        setLoading(false);
      });
  }, []);

  const getWeatherIcon = (code: number, size: string = "w-8 h-8") => {
    // WMO Weather interpretation codes
    if (code === 0) return <Sun className={`${size} text-yellow-500`} />;
    if (code <= 3) return <Cloud className={`${size} text-gray-400`} />;
    if (code <= 67) return <CloudRain className={`${size} text-blue-500`} />;
    if (code <= 77) return <CloudSnow className={`${size} text-blue-300`} />;
    return <Cloud className={`${size} text-gray-400`} />;
  };

  const getWeatherDescription = (code: number) => {
    if (code === 0) return t("בהיר", "Clear sky");
    if (code <= 3) return t("מעונן חלקית", "Partly cloudy");
    if (code <= 67) return t("גשום", "Rainy");
    if (code <= 77) return t("שלג", "Snow");
    return t("מעונן", "Cloudy");
  };

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = language === "he" 
      ? ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
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
    <div className="relative">
      {/* Current Weather - Always Visible */}
      <div 
        className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm cursor-pointer hover:bg-white transition-colors"
        onClick={() => setShowForecast(!showForecast)}
      >
        {getWeatherIcon(weather.weatherCode)}
        <div className="flex flex-col">
          <div className="text-lg font-bold">{weather.temperature}°C</div>
          <div className="text-xs text-muted-foreground">{getWeatherDescription(weather.weatherCode)}</div>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Wind className="w-3 h-3" />
          <span>{weather.windSpeed} km/h</span>
        </div>
        <Calendar className="w-4 h-4 text-muted-foreground ml-2" />
      </div>

      {/* 5-Day Forecast - Expandable */}
      {showForecast && (
        <Card className="absolute top-full mt-2 right-0 w-80 shadow-xl z-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {t("תחזית ל-5 ימים", "5-Day Forecast")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {forecast.map((day, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-3 flex-1">
                  {getWeatherIcon(day.weatherCode, "w-6 h-6")}
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{getDayName(day.date)}</span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(day.date), 'MMM d')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-primary">{day.maxTemp}°</span>
                  <span className="text-muted-foreground">{day.minTemp}°</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
