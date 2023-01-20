import json
import win32com.client

def list_connected_devices():
    wmi = win32com.client.GetObject("winmgmts:")
    devices = wmi.InstancesOf("Win32_PnPEntity")
    ports = wmi.InstancesOf("Win32_SerialPort")
    data = []
    for device in devices:
        data.append({
            "Device Name": device.Name,
            "Device Description": device.Description,
            "Device Hardware ID": device.HardwareID
        })
    for port in ports:
        data.append({
            "Port Name": port.Name,
            "Port Description": port.Description,
            "Port Status": port.Status
        })
    with open('devices.json', 'w') as json_file:
        json.dump(data, json_file)

list_connected_devices()
