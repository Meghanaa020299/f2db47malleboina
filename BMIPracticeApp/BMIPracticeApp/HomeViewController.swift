//
//  ViewController.swift
//  BMIPracticeApp
//
//  Created by Malleboina,Meghanaa on 4/11/23.
//

import UIKit

class HomeViewController: UIViewController {

    @IBOutlet weak var heightOL: UITextField!
    
    
    @IBOutlet weak var weightOL: UITextField!
    
    var BMI = 0.0
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func bmiBtn(_ sender: Any) {
        
        var height = Double(heightOL.text!)
        var weight = Double(weightOL.text!)
        BMI = weight!/(height! * height!)
        
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if(segue.identifier == "ResultSegue") {
            var destination = segue.destination as! ResultViewController
            destination.height1 = heightOL.text!
            destination.weight1 = weightOL.text!
            destination.BMI1 = String(BMI)
        }
        heightOL.text = ""
        weightOL.text = ""
    }
}

