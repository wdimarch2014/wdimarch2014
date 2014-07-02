Rails.application.routes.draw do
  root 'students#main'
  get '/students' => 'students#index'
  get '/student/:id' => 'students#show'
  get '/main' => 'students#main'

end

# Prefix Verb URI Pattern            Controller#Action
#     root GET  /                      students#index
# students GET  /students(.:format)    students#index
#          GET  /student/:id(.:format) students#show