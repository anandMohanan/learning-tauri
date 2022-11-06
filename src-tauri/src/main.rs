#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]


#[tauri::command]
fn add(num1: i64,num2: i64) -> String{
    println!("2");
    println!("{}",num1);
    format!("Addition: {}",num1+num2)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![add])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
