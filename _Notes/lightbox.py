from abc import ABC, abstractmethod

class StateMachine(ABC):
    
    def start(self):
        self.state = self.start_state

    def step(self, inp):
        ns, o = self.get_next_values(self.state, inp)
        self.state = ns
        return o

    @property
    @abstractmethod
    def start_state(self):
        pass

    @abstractmethod
    def get_next_values(self, state, inp):
        pass
    
class LightBoxSM(StateMachine):
    
    def start_state(self):
        return "off"
        
    def get_next_values(self, state, inp):
        
        if state == "off":
            if inp == 1:
                next_state = "on"
            else:
                next_state = "off"
        elif state == "on":
            if inp == 1:
                next_state = "off"
            else:
                next_state = "on"
        output = next_state
        return next_state, output
        
lb2 = LightBoxSM()
lb2.start()
print(lb2.step(0))
print(lb2.step(0))
print(lb2.step(1))
print(lb2.step(0))
print(lb2.step(0))
print(lb2.step(0))
print(lb2.step(0))
print(lb2.step(1))
print(lb2.step(1))
print(lb2.step(1))
print(lb2.step(1))
print(lb2.step(0))
print(lb2.step(1))

