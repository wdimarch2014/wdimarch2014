class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.text :bio
      t.string :github
      t.string :linkedin
      t.string :website
      t.string :project1
      t.string :project2
      t.string :project3
      t.string :photo

      t.timestamps
    end
  end
end
