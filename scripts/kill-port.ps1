$port = 5173
$connections = netstat -ano | findstr ":$port" | findstr "LISTENING"

if ($connections) {
    $pids = $connections | ForEach-Object {
        if ($_ -match "LISTENING\s+(\d+)") {
            $matches[1]
        }
    }
    
    foreach ($pid in $pids) {
        if ($pid) {
            Write-Host "Port $port kullanan process kapatılıyor (PID: $pid)..."
            taskkill /F /PID $pid 2>$null
        }
    }
    Write-Host "Temizlik tamamlandı."
} else {
    Write-Host "Port $port kullanan process bulunamadı."
}

